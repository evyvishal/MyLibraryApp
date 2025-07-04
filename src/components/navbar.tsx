import React from 'react'
import Link from 'next/link'
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from './ui/navigation-menu'
import { NavigationMenuContent } from '@radix-ui/react-navigation-menu'
import { addWeeks, format } from 'date-fns'
import UserButton from './user-button'
function Navbar() {

    const from = format(new Date(), "yyyy-MM-dd");
    const to = format(addWeeks(new Date(), 2), "yyyy-MM-dd");

  return (
    <nav className="bg-black text-white w-full hidden sm:block">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center space-x-8">
          <Link href="/" className="hover:text-gray-400">
            Cataloge
          </Link>
          <Link href="locations" className="hover:text-gray-400">
            Locations
          </Link>
          <Link
            href={`/activities?from=${from}&to=${to}`}
            className="hover:text-gray-400"
          >
            Activities
          </Link>
          {/*menu button */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Library resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="flex flex-col p-4 md:w-[400px] lg:w-[500px]">
                    <li>
                      <Link
                        href="Library-card"
                        className="block space-y-1 p-3 rounded hover:bg-accent"
                      >
                        <div className="font-medium leading-none">
                          Library card
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Use you Library card to borrow materials, access
                          digital resources, and explore library technology.
                        </p>
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="book-a-room"
                        className="block space-y-1 p-3 rounded hover:bg-accent"
                      >
                        <div className="font-medium leading-none">
                          Book a room
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Book a room for group discussions.
                        </p>
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="equipment-rental"
                        className="block space-y-1 p-3 rounded hover:bg-accent"
                      >
                        <div className="font-medium leading-none">
                          Equipment rental
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Rent 3D printers, projectors and more.
                        </p>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div>
          <UserButton />
        </div>
      </div>
    </nav>
  );
}

export default Navbar