import React from 'react';
import LazyMount from '../LazyMount';
import { mount } from 'enzyme';

describe('LazyMount', () => {
  it('Lazy mounts its children when trigger becomes positive', () => {
    const wrapper = mount(
      <LazyMount trigger={false}>
        <div />
      </LazyMount>
    );

    // not mounted
    expect(wrapper.find('div').exists()).toBeFalsy();

    // mounted
    wrapper.setProps({ trigger: true });
    expect(wrapper.find('div').exists()).toBeTruthy();

    // still mounted
    wrapper.setProps({ trigger: false });
    expect(wrapper.find('div').exists()).toBeTruthy();
  });

  it('Lazy mounts its children with suspense when fallback prop is present', () => {
    const fallback = <div />;
    const wrapper = mount(
      <LazyMount trigger={false} fallback={fallback}>
        <div />
      </LazyMount>
    );

    // not mounted
    expect(wrapper.find('div').exists()).toBeFalsy();

    // mounted
    wrapper.setProps({ trigger: true });
    expect((wrapper.find('Suspense') as any).props().fallback).toEqual(fallback);

    // still mounted
    wrapper.setProps({ trigger: false });
    expect((wrapper.find('Suspense') as any).props().fallback).toEqual(fallback);
  });
});
