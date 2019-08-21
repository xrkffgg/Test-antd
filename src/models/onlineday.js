import queryOnlineDay from '../services/onlineday'

export default {
  namespace: 'onlineday',
  state: [],
  reducers: {
    add(state){
      return [...state]
    },
  },
  effects: {
    *fetchOnlineDay({ payload: {} }, { put, call }) {
      yield call(queryOnlineDay, {});
      yield put({ type: 'add', payload: {} });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname}) => {
        if (pathname === '/online') {
          dispatch({ type: 'fetchOnlineDay', payload: {}});
        }
      });
    },
  },
}