import Settings from './index';

export function paperTypeChange(this: Settings, e: any) {
  const { dispatch } = this.props;
  dispatch({
    type: 'cardData/paperTypeChange',
    payload: {
      val: e.target.value,
    },
  })
}