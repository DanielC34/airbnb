import React from 'react'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { MenuIcon } from 'lucide-react'
import UserImage from '@/public/user.png'
import Image from 'next/image'


const UserNav = () => {
  return (
      <DropdownMenu>
          <DropdownMenuTrigger>
              <div className="rounded-full border px-2 py-2 lg:px-4 flex items-center gap-x-3">
                  <MenuIcon className='w-6 h-6 lg:w-5 lg:h-5' />
                  <Image src={UserImage} alt="user image" width={23} height={23} className="rounded-full hidden lg:block bg-gray-300" />
              </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-[200px]" align="end">
              <DropdownMenuItem>
                  Register
            </DropdownMenuItem>
              <DropdownMenuItem>
                  Log In
            </DropdownMenuItem>
          </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserNav