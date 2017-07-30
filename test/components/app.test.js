//import { renderComponent , expect } from '../test_helper';
import React from 'react';
import { connect } from 'react-redux';
import { shallow, mount, render } from 'enzyme';
import { createMockStore } from 'redux-test-utils';
import { shallowWithStore } from 'enzyme-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import App from '../../src/components/app';
import Unit from '../../src/components/unit';
import Tick from '../../src/containers/tick'
import Universe from '../../src/containers/universe'
import Header from '../../src/components/header';
import { Provider } from 'react-redux';
import chai from 'chai';
/*
describe('App' , () => {
  let component;
  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });
});
*/
describe('header', () =>{
  it('renders header component as expected', () =>{
    const headerComponent = renderer.create(
      <Header/>
    );

    let json = headerComponent.toJSON();
    expect(json).toMatchSnapshot();
  })
});

describe('tick', () => {
  it('dispatches action correctly', () => {
    const action = {
        type: 'FETCH_STATE'
      };
      const mapDispatchToProps = (dispatch) => ({
        dispatchProp() {
          dispatch(action);
        },
      });
      const store = createMockStore();

      const ConnectedComponent = connect(undefined, mapDispatchToProps)(Tick);
      const component = shallowWithStore(<ConnectedComponent />, store);
      component.props().dispatchProp();
      expect(store.isActionDispatched(action)).toBe(true);
  });

  it('renders with a form', ()=>{
    const expectedState = '{generation : 1}';
      const mapStateToProps = (state) => ({
        state,
      });
      const ConnectedComponent = connect(mapStateToProps)(Tick);
      const component = shallowWithStore(<ConnectedComponent />, createMockStore(expectedState));
      expect(component.props().state).toBe(expectedState);

      chai.expect(component).to.be.a('object');
      chai.expect(component.dive().find('form > input')).to.exist;
      expect(component.props().state).toBe(expectedState);
  });
});
