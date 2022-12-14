const docTranslate = {
  createApi: 'Tạo mới tài liệu API',
  title: 'Tiêu đề',
  createBtn: 'Tạo mới',
  method: 'Phương thức',
  members: 'Thành viên',
  description: 'Mô tả',
  name: 'Tên',
  typeField: 'Kiểu dữ liệu',
  required: 'Bắt buộc',
  note: 'Chú thích',
  createSuccess: 'Thêm Doc API thành công!',
  createFail: 'Tạo doc API thất bại!',
  tasks: 'công việc',
  code: 'Code',
  history: 'Lịch sử',
  lab: 'Kiểm thử',
  document: 'Tài liệu',
  notification: 'Thông báo',
  empty: 'Không có bản ghi nào',
};

export type DocTranslateType = typeof docTranslate;

export type DocTranslateKeyType = keyof DocTranslateType;

export default docTranslate;
