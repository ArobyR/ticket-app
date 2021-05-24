import React, { useEffect, useState } from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import Logo from "../Components/UI/Logo";
import NavLink from "../Components/UI/NavLink";
import Dropdown from "../Components/UI/Dropdown";
import ResponsiveNavLink from "../Components/UI/ResponsiveNavLink";

export default function Authenticated({ title, auth, children, header }) {

    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(
        false
    );

    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <div className="min-h-screen bg-gray-100 ">
            {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}
            <main>{children}</main>
        </div>
    );
}
