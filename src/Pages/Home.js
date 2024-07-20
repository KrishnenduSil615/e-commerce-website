import React from 'react'
import { Container, Table, Row, Button } from 'react-bootstrap';

function Home() {
  return (
    <Container>
      <Row className='mx-5' >
        <h1 className='text-center'>TOURS</h1>
        <Table class="table ">
          <thead>
            <tr className='text-center'>
              <th scope="col">Jul 16</th>
              <th scope="col">DETROIT, MI</th>
              <th scope="col">DTE ENERGY MUSIC THEATRE</th>
              <th scope="col"><Button>Buy Tickets</Button></th>
            </tr>
            <tr className='text-center'>
              <th scope="col">JUL 19</th>
              <th scope="col">
                TORONTO,ON
              </th>
              <th scope="col">
                BUDWEISER STAGE</th>
              <th scope="col"><Button>Buy Tickets</Button></th>
            </tr>
            <tr className='text-center'>
              <th scope="col">Jul 16</th>
              <th scope="col">BRISTOW, VA</th>
              <th scope="col">
                JIGGY LUBE LIVE</th>
              <th scope="col"><Button>Buy Tickets</Button></th>
            </tr>
            <tr className='text-center'>
              <th scope="col">Jul 16</th>
              <th scope="col">
                PHOENIX, AZ</th>
              <th scope="col">
                AK-CHIN PAVILION</th>
              <th scope="col"><Button>Buy Tickets</Button></th>
            </tr>
            <tr className='text-center'>
              <th scope="col">Jul 16</th>
              <th scope="col">
                LAS VEGAS, NV</th>
              <th scope="col">
                T-MOBILE ARENA</th>
              <th scope="col"><Button>Buy Tickets</Button></th>
            </tr>
            <tr className='text-center'>
              <th scope="col">Jul 16</th>
              <th scope="col">
                CONCORD, CA</th>
              <th scope="col">
                CONCORD PAVILION
              </th>
              <th scope="col"><Button>Buy Tickets</Button></th>
            </tr>
          </thead>

        </Table>
      </Row>
    </Container>
  )
}

export default Home;