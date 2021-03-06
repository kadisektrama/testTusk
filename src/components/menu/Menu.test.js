import React from "react"
import Menu from "./Menu"
import {shallow,configure} from "enzyme"
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() })

describe("test(proverka)",() => {

  it('render initial', () => {
        expect(true).toBe(true);
  })


    it("Render component",() => {
        const wrapper = shallow(<Menu/>);
        expect(wrapper.exists()).toBe(true);
    })
    it("Render first <div/>",() => {
        const wrapper = shallow(<Menu/>);
        expect(wrapper.find("div").exists()).toBe(true);
    })
    it("Find <header/>",() => {
        const wrapper = shallow(<Menu/>);
        expect(wrapper.find("header").exists()).toBe(false);
    })

})
