import React from "react";
import "./invoice.scss";

const Invoice = (props) => {
  const { invoice } = props;

  return (
    <div className="invoice">
      <header>
        <h1>Invoice</h1>
        <address contenteditable>
          <p>{invoice.email}</p>
          <p>
            101 E. Chapman Ave
            <br />
            Orange, CA 92866
          </p>
          <p>(800) 555-1234</p>
        </address>
        <span>
          <img alt="" src="n.png" width={50} />
          <input type="file" accept="image/*" />
        </span>
      </header>
      <article>
        <h1>Recipient</h1>
        <address contenteditable>
          <p>North logistics</p>
        </address>
        <table className="meta">
          <tr>
            <th>
              <span contenteditable>Invoice #</span>
            </th>
            <td>
              <span contenteditable>{invoice.id}</span>
            </td>
          </tr>
          <tr>
            <th>
              <span contenteditable>Date</span>
            </th>
            <td>
              <span contenteditable>{Date(invoice.created * 1000)}</span>
            </td>
          </tr>
          <tr>
            <th>
              <span contenteditable>Amount Due</span>
            </th>
            <td>
              <span id="prefix" contenteditable>
                $
              </span>
              <span>{invoice.amount}</span>
            </td>
          </tr>
        </table>
        <table className="inventory">
          <thead>
            <tr>
              <th>
                <span contenteditable>Item</span>
              </th>
              <th>
                <span contenteditable>Description</span>
              </th>
              <th>
                <span contenteditable>Rate</span>
              </th>
              <th>
                <span contenteditable>Quantity</span>
              </th>
              <th>
                <span contenteditable>Price</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="##" className="cut">
                  -
                </a>
                <span contenteditable>Shipping</span>
              </td>
              <td>
                <span contenteditable>Logistics Service</span>
              </td>
              <td>
                <span data-prefix>$</span>
                <span contenteditable>{invoice.amount}</span>
              </td>
              <td>
                <span contenteditable>1</span>
              </td>
              <td>
                <span data-prefix>$</span>
                <span>{invoice.amount}</span>
              </td>
            </tr>
          </tbody>
        </table>
        <a href="/#" className="add">
          +
        </a>
        <table className="amount">
          <tr>
            <th>
              <span contenteditable>Total</span>
            </th>
            <td>
              <span data-prefix>$</span>
              <span>{invoice.amount}</span>
            </td>
          </tr>
          <tr>
            <th>
              <span contenteditable>Amount Paid</span>
            </th>
            <td>
              <span data-prefix>$</span>
              <span contenteditable>{invoice.amount}</span>
            </td>
          </tr>
          <tr>
            <th>
              <span contenteditable>amount Due</span>
            </th>
            <td>
              <span data-prefix>$</span>
              <span>0</span>
            </td>
          </tr>
        </table>
      </article>
      <aside>
        <h1>
          <span contenteditable>Additional Notes</span>
        </h1>
        <div contenteditable>
          <p>
            A finance charge of 1.5% will be made on unpaid balances after 30
            days.
          </p>
        </div>
      </aside>
      <div className="mt-2">
        <button className="btn btn-secondary" onclick={() => window.print()}>
          Download / print
        </button>
        <button className="btn btn-secondary ml-2" onClick={props.callback}>
          Go to home
        </button>
      </div>
    </div>
  );
};

export default Invoice;
