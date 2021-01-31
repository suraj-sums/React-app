const { REACT_APP_LIVE_DOWNLOADURL, REACT_APP_LOCAL_DOWNLOADURL } = process.env;
export const getAPIBaseURL = () =>
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? REACT_APP_LOCAL_DOWNLOADURL : REACT_APP_LIVE_DOWNLOADURL;
