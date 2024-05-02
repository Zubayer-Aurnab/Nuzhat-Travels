
import { Menu } from 'antd';
import "./Dropdown.css";


const Dropdowns = () => {

  const items = [
    {
      key: '1',
      label: <span style={{ color: "white", fontWeight: "600", fontSize: "16px", }}> Ait Ticket invoice</span>,
      children: [
        {
          key: '11',
          label: ' Ait Ticket invoice 1',
        },
        {
          key: '12',
          label: ' Ait Ticket invoice 2',
        },
        {
          key: '13',
          label: ' Ait Ticket invoice 3',
        },
        {
          key: '14',
          label: ' Ait Ticket invoice 4',
        },
      ],
    },
    {
      key: '2',
      label: <span style={{ color: "white", fontWeight: "600", fontSize: "16px", }}> Tour Invoice</span>,
      children: [
        {
          key: '11',
          label: ' Tour Invoice 1',
        },
        {
          key: '12',
          label: ' Tour Invoice 2',
        },
        {
          key: '13',
          label: ' Tour Invoice 3',
        },
        {
          key: '14',
          label: ' Tour Invoice 4',
        },
      ],
    },
    {
      key: '3',
      label: <span style={{ color: "white", fontWeight: "600", fontSize: "16px", }}> Hajj/Umra invoice</span>,
      children: [
        {
          key: '11',
          label: ' Hajj/Umra invoice',
        },
        {
          key: '12',
          label: ' Hajj/Umra invoice 2',
        },
        {
          key: '13',
          label: ' Hajj/Umra invoice 3',
        },
        {
          key: '14',
          label: ' Hajj/Umra invoice 4',
        },
      ],
    },
    {
      key: '4',
      label: <span style={{ color: "white", fontWeight: "600", fontSize: "16px", }}> BMET</span>,
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
      key: '11',
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
      key: '12',
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
      key: '13',
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

        <Menu
          mode="inline"
          items={items}
          style={{
            
          }}
          className='menu'
        />


      </div >
    </div>
  );
};

export default Dropdowns;