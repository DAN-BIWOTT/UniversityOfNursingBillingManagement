/*!

=========================================================
* Now UI Dashboard React - v1.5.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import CheckOutButton from "components/Billing/CheckOutButton";



function RegularTables() {
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col xs={5}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4"><h6 className="text-info">
                   Product Services
                  </h6></CardTitle>
              </CardHeader>
              <CardBody>
                <h5>POSTGRES Database</h5>
                <h5>GraphQl</h5>
                <h5>RealTime Database</h5>
                <h5>File Database</h5>
              </CardBody>
            </Card>
          </Col>
          <Col xs={5}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Billing</CardTitle>
              </CardHeader>
              <CardBody>
              <CheckOutButton/>
              </CardBody>
            </Card>
          </Col>
          <Col xs={12}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Billing History</CardTitle>
              </CardHeader>
              <CardBody>
                
              </CardBody>
            </Card>
          </Col>
          
        </Row>
      </div>
    </>
  );
}

export default RegularTables;