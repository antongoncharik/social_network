import React from "react";
import {create} from "react-test-renderer";
import ProfileStatusWithHook from "./ProfileIStatusWithHook";

describe("Profile status component", () => {
    test("Matches the snapshot", () => {
        const component = create(<ProfileStatusWithHook status={'Anton'}/>);
        const root = component.root;
        let span = root.findByType('span');
        expect(span.children.length).toBe(1);
    });
})