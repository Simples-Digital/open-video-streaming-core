module.exports = {
  FILES_IS_UNDEFINED_ERROR: {
    status: 400,
    message: 'There was no file in requisition.',
  },
  FORBIDDEN_UPLOAD_ERROR: {
    status: 403,
    message: 'There was no user email or user key on header',
  },
};
