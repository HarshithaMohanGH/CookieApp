import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <footer className="bg-gray-100 text-gray-800 py-4">
            <div className="container mx-auto px-4 lg:px-0">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src="https://ugc.production.linktr.ee/pRr65pZYQkaovFY0p1x3_448f3af6fbe1ae9954db7345561d64a1"
                                className="mr-4 h-16"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="text-sm text-gray-500 md:text-right">
                        <p>© 2024 BakeryBro Productions. All Rights Reserved.</p>
                        <p className="mt-2">Crafting the finest baked goods with love.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
