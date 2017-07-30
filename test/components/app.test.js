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

describe('App' , () => {
  let component;
  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });
});

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
    const mockStore = configureStore([]);
    const store = mockStore({});
    const wrapper = mount(
        <Provider store={store}>
           <Tick/>
        </Provider>);
    //expect(store.getActions().length).toBe(0);
    //wrapper.find('form').to.exist;
    console.log(wrapper);
    expect(wrapper).to.exist;
/*
    expect(store.getActions().length).toBe(1);
  it('renders a form', () => {
    expect(tickContainer.find('form')).to.exist;
  });
*/
});
