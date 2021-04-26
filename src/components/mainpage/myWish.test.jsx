import React from "react"
import {MyWish} from "./myWish"
import {shallow,configure} from "enzyme"
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() })

describe("test(proverka)",() => {

  it('render initial', () => {
        expect(true).toBe(true);
  })


    it("Render component",() => {
        const wrapper = shallow(<MyWish/>);
        expect(wrapper.exists()).toBe(true);
    })
    it("Render first <div/>",() => {
        const wrapper = shallow(<MyWish/>);
        expect(wrapper.find("div").exists()).toBe(true);
    })


})
