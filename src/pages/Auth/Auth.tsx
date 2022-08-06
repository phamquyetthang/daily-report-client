import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppSelector';
import useAppTranslate from '../../hooks/useAppTranslate';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { MdAlternateEmail, MdLock } from 'react-icons/md';

interface IAuthForm {
  email: string;
  password: string;
}
const schema = yup
  .object({
    email: yup.string().email('Email is invalid').required('Email is required'),
    password: yup.string().required('Password is required'),
  })
  .required();

const AuthScreen = () => {
  const { type } = useParams<{ type: 'login' | 'register' | 'forgot' }>();
  const [authType, setAuthType] = useState<'login' | 'register' | 'forgot'>('login');

  const isAuth = useAppSelector((store) => store.auth.isAuth);

  const navigate = useNavigate();

  const word = useAppTranslate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IAuthForm>({ resolver: yupResolver(schema), mode: 'onBlur' });

  useEffect(() => {
    if (isAuth) {
      navigate('home');
    }
  }, [isAuth, navigate]);

  useEffect(() => {
    !!type && setAuthType(type);
    if (type !== 'login' && type !== 'forgot' && type !== 'register') {
      navigate('/auth/login');
    }
  }, [navigate, type]);

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <div className="flex w-full h-screen justify-center items-center bg-white space-y-8 app-auth__form">
      <div className="w-full px-8 md:px-32 lg:px-24 lg:w-1/2">
        <form
          className="bg-white rounded-md shadow-2xl p-5"
          onSubmit={onSubmit}
        >
          <h1 className="text-gray-800 font-bold text-2xl mb-1">
            {word(`authTranslate.title.${authType}`)}
          </h1>
          <p className="text-sm font-normal text-gray-600 mb-8">
            {word(`authTranslate.welcome.${authType}`)}
          </p>
          <div className="mb-8">
            <div className="flex items-center border-2 rounded-2xl  py-2 px-3">
              <MdAlternateEmail className="h-5 w-5 text-gray-400" />
              <input
                {...register('email')}
                className="pl-2 w-full outline-none border-none"
                placeholder="Email Address"
              />
            </div>
            <small>{errors.email?.message}</small>
          </div>

          {authType !== 'forgot' && (
            <>
              <div className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl">
                <MdLock className="h-5 w-5 text-gray-400"></MdLock>
                <input
                  {...register('password')}
                  className="pl-2 w-full outline-none border-none"
                  placeholder="Password"
                />
              </div>
              <small>{errors.password?.message}</small>
            </>
          )}
          <button
            type="submit"
            disabled={!isValid}
            className={`block w-full bg-indigo-600 mt-5 py-2 rounded-2xl   transition-all duration-500 text-white font-semibold mb-2${
              isValid ? 'hover:bg-indigo-700 hover:-translate-y-1' : ' opacity-70'
            }`}
          >
            {word(`authTranslate.title.${authType}`)}
          </button>
          <div className="flex justify-between mt-4">
            <Link
              to={`/auth/forgot`}
              className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all"
            >
              Forgot Password ?
            </Link>

            <Link
              to={`/auth/${authType === 'login' ? 'register' : 'login'}`}
              className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all"
            >
              {type === 'login' ? "Don't have an account yet?" : 'Go to login!'}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthScreen;
