export const PRODUCT_LIST = {
  GET: 'PRODUCT_LIST_GET',
  SET: 'PRODUCT_LIST_SET',
};

export const postChat = (payload: any) => {
  return {
    type: PRODUCT_LIST.GET,
    payload,
  };
};

export const setChat = (payload: {test: string}) => {
  return {
    type: PRODUCT_LIST.SET,
    payload,
  };
};
