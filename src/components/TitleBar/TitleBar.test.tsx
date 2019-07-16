import React from 'react';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { shallow, mount } from 'enzyme';

import TitleBar from './TitleBar';
import {MenuItem} from "@material-ui/core";

describe("Basic", () => {
  it('should render without crashing', () => {
    const titleBar = shallow(<TitleBar
        title="Test Title"
        drawerWidth={240}
        signOut={() => null}
        handleDrawerToggle={() => null}/>);
    expect(titleBar.exists()).toBe(true);
  });

  it("should display the right title", () => {
    const titleBar = shallow(<TitleBar
        title="Test Title"
        drawerWidth={240}
        signOut={() => null}
        handleDrawerToggle={() => null}/>);

    expect(titleBar.find(Typography).text()).toBe("Test Title");

    titleBar.setProps({title: 'New Title'});
    expect(titleBar.find(Typography).text()).toBe("New Title");
  });

  it('should render a <TitleBar> component as expected', () => {
    const wrapper = mount(
        <TitleBar
            title="Test Title"
            drawerWidth={240}
            signOut={() => null}
            handleDrawerToggle={() => null}/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe("Events", () => {
  it('handles the drawer toggle call', () => {
    const handler = jest.fn();

    const titleBar = shallow(<TitleBar
        title="Test Title"
        drawerWidth={240}
        signOut={() => null}
        handleDrawerToggle={handler}/>);

    const drawerToggle = titleBar.find(IconButton).first();
    drawerToggle.simulate('click');

    expect(handler).toBeCalled();
  });

  it('handles the sign out call', () => {
    const handler = jest.fn();

    const titleBar = shallow(<TitleBar
        title="Test Title"
        drawerWidth={240}
        signOut={handler}
        handleDrawerToggle={() => null}/>);

    const signOutButton = titleBar.find(MenuItem).first();
    signOutButton.simulate('click');

    expect(handler).toBeCalled();
  });

  it('handles the menu call', () => {
    const titleBar = shallow(<TitleBar
        title="Test Title"
        drawerWidth={240}
        signOut={() => null}
        handleDrawerToggle={() => null}/>);

    const userButton = titleBar.find(IconButton).at(1);
    userButton.simulate('click', {
      currentTarget: null
    });
  });
});