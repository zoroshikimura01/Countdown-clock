import React, {useState, useEffect} from 'react';
import DateTimePicker from 'react-datetime-picker';
import { useDispatch } from 'react-redux';
import { timePick } from '../actions/timePickActions';
import {
  PickerWrapper
} from './Picker.styles'
const Picker = () => {
  const dispatch = useDispatch();
  const [value, onChange] = useState(new Date());
  useEffect(() => {
    const setValue = value.toISOString().split('T')[0]+" "+value.toLocaleTimeString();
    dispatch(timePick(setValue))
  }, [dispatch, value])

  return (
    <PickerWrapper>
      <DateTimePicker
        onChange={onChange}
        value={value}
      />
    </PickerWrapper>
  )
}

export default Picker
