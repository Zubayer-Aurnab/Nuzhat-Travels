
import { Button, Menu } from 'antd';
import { FaPlus } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoAirplane } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { controlNav } from '../../../Redux/Features/NavbarSlice/NavbarSlice';
import "./Dropdown.css";

const Dropdowns = () => {
  const dispatch = useDispatch()
  const handelOpenNav = () => {
    dispatch(controlNav())
  }
  const items = [
    {
      key: '2', label: <NavLink
        to={`/`}
        className={({ isActive, isPending }) =>
          isActive
            ? "flex items-center gap-2"
            : isPending
              ? "pending"
              : "flex items-center gap-2"
        }
      >
        <span style={{ color: "white", fontWeight: "600", fontSize: "16px", }}> Dashboard</span>
      </NavLink>,
      children: []
    },
    // 2----------
    {
      key: '1',
      icons: <IoAirplane />,
      label: <span style={{
        color: "white",
        fontWeight: "600",
        fontSize: "16px",
        display: "flex",
        alignItems: "center",
        gap: "10px"
      }}> <IoAirplane /> invoice (Ait Ticket)</span>,
      children: [
        {
          key: 'CM',
          label: <NavLink
            to={`/commison`}
            className={({ isActive, isPending }) =>
              isActive
                ? "flex items-center gap-2"
                : isPending
                  ? "pending"
                  : "flex items-center gap-2"
            }
          >
            <FaPlus />New Invoice (Ait Ticket)
          </NavLink>
        },
        {
          key: 'VIAT',
          label: <NavLink
            to={`/view-invoice`}
            className={({ isActive, isPending }) =>
              isActive
                ? "flex items-center gap-2"
                : isPending
                  ? "pending"
                  : "flex items-center gap-2"
            }
          >
            <GiHamburgerMenu />View Invoice (Ait Ticket)
          </NavLink>
        },
      ],
    },
    // 3-----------
    {
      key: '3',
      label: <span style={{
        color: "white",
        fontWeight: "600",
        fontSize: "16px",
        display: "flex",
        alignItems: "center",
        gap: "10px"
      }}> <IoAirplane /> invoice (Non commission)</span>,
      children: [
        {
          key: 'NCM',
          label: <NavLink
            to={`/non-commison`}
            className={({ isActive, isPending }) =>
              isActive
                ? "flex items-center gap-2"
                : isPending
                  ? "pending"
                  : "flex items-center gap-2"
            }
          >
            <FaPlus /> Non Commisonal  invoice
          </NavLink>

        },
        {
          key: 'VNC',
          label: <NavLink
            to={`/view-non-commission`}
            className={({ isActive, isPending }) =>
              isActive
                ? "flex items-center gap-2"
                : isPending
                  ? "pending"
                  : "flex items-center gap-2"
            }
          >
            <GiHamburgerMenu />View Non Commission
          </NavLink>

        },
      ],
    },
    // 4-----------
    {
      key: '4',
      label: <span style={{ color: "white", fontWeight: "600", fontSize: "16px", display: "flex", alignItems: "center ", gap: "10px" }}> <IoAirplane /> Re issu- Air Ticket</span>,
      children: [
        {
          key: 'NCM',
          label: <NavLink
            to={`/new-invoice-reissu`}
            className={({ isActive, isPending }) =>
              isActive
                ? "flex items-center gap-2"
                : isPending
                  ? "pending"
                  : "flex items-center gap-2"
            }
          >
            <FaPlus /> New Invoice (Re Issu)
          </NavLink>

        },
        {
          key: 'VNC',
          label: <NavLink
            to={`/view-non-commission`}
            className={({ isActive, isPending }) =>
              isActive
                ? "flex items-center gap-2"
                : isPending
                  ? "pending"
                  : "flex items-center gap-2"
            }
          >
            <GiHamburgerMenu />View Invoice (Re Issu)
          </NavLink>

        },
      ],
    },
    // 5-----------
    {
      key: '5',
      label: <span style={{ color: "white", fontWeight: "600", fontSize: "16px", }}> Passport Manage</span>,
      children: [
        {
          key: '11',
          label: 'BMET',
        },
        {
          key: '12',
          label: ' BMET2',
        },
        {
          key: '13',
          label: ' BMET 3',
        },
        {
          key: '14',
          label: 'BMET',
        },
      ],
    },
    {
      key: '6',
      label: <span style={{ color: "white", fontWeight: "600", fontSize: "16px", }}> Payroll</span>,
      children: [
        {
          key: '11',
          label: 'Payroll',
        },
        {
          key: '12',
          label: ' Payroll',
        },
        {
          key: '13',
          label: ' Payroll 3',
        },
        {
          key: '14',
          label: 'Payroll',
        },
      ],
    },
    {
      key: '7',
      label: <span style={{ color: "white", fontWeight: "600", fontSize: "16px", }}> Other Invoice</span>,
      children: [
        {
          key: '11',
          label: 'Other Invoice',
        },
        {
          key: '12',
          label: ' Other Invoice',
        },
        {
          key: '13',
          label: ' Other Invoice 3',
        },
        {
          key: '14',
          label: 'Other Invoice',
        },
      ],
    },
    {
      key: '8',
      label: <span style={{ color: "white", fontWeight: "600", fontSize: "16px", }}> Expence</span>,
      children: [
        {
          key: '11',
          label: 'Expence',
        },
        {
          key: '12',
          label: ' Expence',
        },
        {
          key: '13',
          label: ' Expence 3',
        },
        {
          key: '14',
          label: 'Expence',
        },
      ],
    },
    {
      key: '9',
      label: <span style={{ color: "white", fontWeight: "600", fontSize: "16px", }}> Pax Wise Invoice</span>,
      children: [
        {
          key: '11',
          label: 'Pax Wise Invoice',
        },
        {
          key: '12',
          label: ' Pax Wise Invoice',
        },
        {
          key: '13',
          label: ' Pax Wise Invoice 3',
        },
        {
          key: '14',
          label: 'Pax Wise Invoice',
        },
      ],
    },
    {
      key: '10',
      label: <span style={{ color: "white", fontWeight: "600", fontSize: "16px", }}> Cheque Managment</span>,
      children: [
        {
          key: '11',
          label: 'Cheque Managment',
        },
        {
          key: '12',
          label: ' Cheque Managment',
        },
        {
          key: '13',
          label: ' Cheque Managment 3',
        },
        {
          key: '14',
          label: 'Cheque Managment',
        },
      ],
    },
    {
      key: '11',
      label: <span style={{ color: "white", fontWeight: "600", fontSize: "16px", }}> Quotation</span>,
      children: [
        {
          key: '11',
          label: 'Quotation',
        },
        {
          key: '12',
          label: ' Quotation',
        },
        {
          key: '13',
          label: ' Quotation 3',
        },
        {
          key: '14',
          label: 'Quotation',
        },
      ],
    },
    {
      key: '12',
      label: <span style={{ color: "white", fontWeight: "600", fontSize: "16px", }}> Agent/Vendor/Clients Maintain</span>,
      children: [
        {
          key: '11',
          label: ' Agent/Vendor/Clients Maintain',
        },
        {
          key: '12',
          label: '  Agent/Vendor/Clients Maintain',
        },
        {
          key: '13',
          label: '  Agent/Vendor/Clients Maintain 3',
        },
        {
          key: '14',
          label: ' Agent/Vendor/Clients Maintain',
        },
      ],
    },
    {
      key: '13',
      label: <span style={{ color: "white", fontWeight: "600", fontSize: "16px", }}> Reports</span>,
      children: [
        {
          key: '11',
          label: ' Reports',
        },
        {
          key: '12',
          label: '  Reports',
        },
        {
          key: '13',
          label: '  Reports 3',
        },
        {
          key: '14',
          label: ' Reports',
        },
      ],
    },
    {
      key: '14',
      label: <span style={{ color: "white", fontWeight: "600", fontSize: "16px", }}> Configuration</span>,
      children: [
        {
          key: '11',
          label: ' Configuration',
        },
        {
          key: '12',
          label: '  Configuration',
        },
        {
          key: '13',
          label: '  Configuration 3',
        },
        {
          key: '14',
          label: ' Configuration',
        },
      ],
    },

  ];
  return (
    <div className="">

      <div className="pl-2 my-3 space-y-3">
        <div className='block px-1 lg:hidden'>
          <Button
            onClick={handelOpenNav}
            danger style={
              {
                width: "100%",
                fontWeight: "600"
              }
            }>Close</Button>
        </div>



        <Menu
          mode="inline"
          items={items}


          className='menu'
        />




      </div >
    </div>
  );
};

export default Dropdowns;