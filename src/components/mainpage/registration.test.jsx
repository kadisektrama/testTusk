import React from "react"
import {Registration} from "./registration"
import {shallow,configure} from "enzyme"
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() })

describe("testProverka",() => {

      it('render initial', () => {
            expect(true).toBe(true);
      })

    it("Render component",() => {
        const wrapper = shallow(<Registration/>);
        expect(wrapper.exists()).toBe(true);
    })
    it("Render first <div/>",() => {
        const wrapper = shallow(<Registration/>);
        expect(wrapper.find("div").exists()).toBe(true);
    })
})

