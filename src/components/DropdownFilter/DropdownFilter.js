import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Input, Menu } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import * as actions from '../../appRedux/actions';

const DropdownFilter = ({ getValues, name }) => {
  // const [checkedValues, setCheckedValues] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(actions.getDropdownFilterList(name));
  }, []);


  const handleChange = (values) => {
    // setCheckedValues(values);
    console.log(values)
  };

  const handleSeeResult = () => {
    // getValues(checkedValues, name);
  };

  const handleClearAll = () => {
    // setCheckedValues([]);
    // getValues([], name);
  };

  // useEffect(() => {
  //   if (clearAllFilters) {
  //     setCheckedValues([]);
  //     getValues([]);
  //   }
  // }, [clearAllFilters]);

  return (
    <Menu className="DropCategory">
      <div className="DropDownBx">
        <Input placeholder="Search" />
        <Checkbox.Group style={{ width: '100%' }} onChange={handleChange}>
          <Checkbox value="A">Checklist <span>12</span></Checkbox>
          <Checkbox value="B">Comment <span>32</span></Checkbox>
          <Checkbox value="C">Decision Log <span>24</span></Checkbox>
          <Checkbox value="D">Smart Text <span>8</span></Checkbox>
          <Checkbox value="E">Task <span>4</span></Checkbox>
          <Checkbox value="F">Variation <span>48</span></Checkbox>
        </Checkbox.Group>
      </div>
      <div className="DropDownBx-footer">
        <Button type="primary" onClick={handleSeeResult}>See Results</Button>
        <Button type="default" onClick={handleClearAll}>Clear All</Button>
      </div>
    </Menu>
  );
};

export default DropdownFilter;