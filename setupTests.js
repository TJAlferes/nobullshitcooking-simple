import React from 'react';
import Enzyme, { render, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzyme-to-json';
import sinon from 'sinon';

// set default Jest serializer to be the one from enzyme-to-json
// (produces a format that is easier to read)
expect.addSnapshotSerializer(createSerializer({mode: "deep"}));

// Enzyme Adapter for React version 16
Enzyme.configure({adapter: new Adapter()});

// make available in all test files, without having to import
global.React = React;
global.render = render;
global.shallow = shallow;
global.mount = mount;
global.sinon = sinon;