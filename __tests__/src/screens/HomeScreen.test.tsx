import React from "react";
import {shallow} from 'enzyme';
import HomeScreen from "../../../src/screens/HomeScreen";

describe("HomeScreen", () => {
    describe("render", () => {
        it("should render the homescreen", () => {
            const homeScreen = shallow(<HomeScreen />);
            expect(homeScreen).toBeDefined();
        })
        
        describe("library section", () => {
            it("should render find icon", () => {
                const homescreen = shallow(<HomeScreen />);
                
                expect(homescreen).toBeDefined();
            
            })
        });
    })
})