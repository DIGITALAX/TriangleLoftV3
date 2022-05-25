import { createModule } from 'redux-modules'
import cloneDeep from 'lodash.clonedeep'
import { Map } from 'immutable'

const DEFAULT_FIELDS = Map({
  params: null,
  isShowJoinMailingModal: false,
  isShowInquiryModal: false,
  isShowOopsModal: false
})


export default createModule({
  name: 'modals',
  initialState: cloneDeep(DEFAULT_FIELDS),
  transformations: {
    setValue: {
      reducer: (state, { payload }) => {
        state = state.set(payload.field, payload.value)
        return state
      }
    }
  }
})
