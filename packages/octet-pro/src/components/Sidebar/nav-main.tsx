import { ChevronRight } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar"

import router, { Route } from "@/config/routes"
import { NavLink, useLocation } from "react-router-dom"
import Icon from "../Icon"

export function NavMain() {
  const location = useLocation()
  const routes = (router.routes as Route[]).filter((item) => !item.hideInMenu)
  const { state } = useSidebar()

  function renderMenu(item: Route) {
    if (item.children) {
      return (
        <CollapsibleTrigger asChild>
          <SidebarMenuButton tooltip={item.name}>
            {item.icon && <Icon name={item.icon} />}
            <span>{item.name}</span>
            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
      )
    }
    return (
      <SidebarMenuButton
        tooltip={item.name}
        isActive={location.pathname === item.path}
      >
        <NavLink
          to={item.path as string}
          className="w-full h-full flex items-center gap-2"
        >
          {item.icon && <Icon name={item.icon} />}
          {state === "expanded" && <span>{item.name}</span>}
        </NavLink>
      </SidebarMenuButton>
    )
  }

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {(routes?.[0].children as Route[])?.map((item) => {
          return (
            <Collapsible
              key={item.name?.toLowerCase()}
              asChild
              defaultOpen={
                location.pathname.startsWith(item.path as string) &&
                !!item.children
              }
              className="group/collapsible"
            >
              <SidebarMenuItem>
                {renderMenu(item)}
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {(item.children as Route[])?.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.name}>
                        <SidebarMenuSubButton
                          asChild
                          isActive={location.pathname === subItem.path}
                        >
                          <NavLink
                            to={subItem.path as string}
                            className="w-full h-full py-1"
                          >
                            <span>{subItem.name}</span>
                          </NavLink>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}
