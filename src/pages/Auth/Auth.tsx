import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppSelector';
import useAppTranslate from '../../hooks/useAppTranslate';

interface IAuthForm {
  email: string;
  password: string;
}
const AuthScreen = () => {
  const { type } = useParams<{ type: 'login' | 'register' | 'forgot' }>();
  const [authType, setAuthType] = useState<'login' | 'register' | 'forgot'>('login')

  const isAuth = useAppSelector((store) => store.auth.isAuth);

  const navigate = useNavigate();

  const word = useAppTranslate();

  const { register, handleSubmit, formState: { errors, isValid } } = useForm<IAuthForm>();

  useEffect(() => {
    if (isAuth) {
      navigate('home');
    }
  }, [isAuth, navigate]);

  useEffect(() => {
    !!type && setAuthType(type)
    if (type !== 'login' && type !== 'forgot' && type !== 'register') {
      navigate('/auth/login')
    }
  }, [type])

  return (
    <div className="flex w-full h-screen justify-center items-center bg-white space-y-8 app-auth__form">
      <div className="w-full px-8 md:px-32 lg:px-24 lg:w-1/2">
        <form className="bg-white rounded-md shadow-2xl p-5">
          <h1 className="text-gray-800 font-bold text-2xl mb-1">
            {word(`authTranslate.title.${authType}`)}
          </h1>
          <p className="text-sm font-normal text-gray-600 mb-8">
            {word(`authTranslate.welcome.${authType}`)}
          </p>
          <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <input
              className="pl-2 w-full outline-none border-none"
              {...register("email", {
                required: true, pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address"
                }
              })}
              placeholder="Email Address"
            />
          </div>
          {authType !== 'forgot' && <div className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <input
              className="pl-2 w-full outline-none border-none"
              {...register('password', { required: true })}
              placeholder="Password"
            />
          </div>}
          {JSON.stringify(errors)}
          <button
            type="submit"
            disabled={!isValid}
            className="block w-full bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
          >
            {word(`authTranslate.title.${authType}`)}
          </button>
          <div className="flex justify-between mt-4">
            <Link to={`/auth/forgot`} className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">
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
