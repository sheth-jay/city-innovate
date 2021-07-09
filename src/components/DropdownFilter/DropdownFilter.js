import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Input, Menu } from 'antd';

const DropdownFilter = ({ getValues, name, clearAllFilters }) => {
  const [checkedValues, setCheckedValues] = useState([]);

  const handleChange = (values) => {
    setCheckedValues(values);
  };

  const handleSeeResult = () => {
    getValues(checkedValues, name);
  };

  const handleClearAll = () => {
    setCheckedValues([]);
    getValues([], name);
  };

  useEffect(() => {
    if (clearAllFilters) {
      setCheckedValues([]);
      getValues([]);
    }
  }, [clearAllFilters]);

  return (
    <Menu className="DropCategory">
      <div className="DropDownBx">
        <Input placeholder="Search" />
        <Checkbox.Group style={{ width: '100%' }} onChange={handleChange} value={checkedValues}>
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