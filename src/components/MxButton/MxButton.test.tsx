import React from 'react';
import renderer from 'react-test-renderer';
import MxButton from './MxButton';

const onPressMock = jest.fn();

it('MxButton Render correctly', () => {
  const component = renderer.create(
    <MxButton text="Submit" onPress={onPressMock} />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

// it.todo('MxButton testing');
