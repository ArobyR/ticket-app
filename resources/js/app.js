require("./bootstrap");
import React from "react";
import { render } from "react-dom";
import { App } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";
import { Windmill } from "@windmill/react-ui";

const el = document.getElementById("app");

render(
    <Windmill>
        <App
            initialPage={JSON.parse(el.dataset.page)}
            resolveComponent={(name) => require(`./Pages/${name}`).default}
        />
    </Windmill>,
    el
);

InertiaProgress.init({ color: "#4B5563" });
