import React from 'react';
import PropTypes from 'prop-types';
import Box from '../../components/Box';
import Text from '../../components/Text';
import Flex from '../../components/Flex';
import List, { ListItem } from '../../components/List';
import { parseRawPrice } from './price';
import { Col, Row } from '../../components/Grid';

const PriceSummary = ({ summary, totalPrice }) => (
  <Box width={['290px', '450px']}>
    <List padding={3}>
      {
        summary.map((recipe) => (
          <ListItem key={recipe.id}>
            <Row>
              <Col sm={9}>
                <Box mb={2}>
                  <Text>{recipe.name}</Text>
                </Box>
              </Col>
              <Col sm={3}>
                <Flex alignItems="center" justifyContent="flex-end">
                  <Box mb={2}>
                    <Text fontWeight="light" fontSize="md">{parseRawPrice(recipe.unitPrice * recipe.selected)}</Text>
                  </Box>
                </Flex>
              </Col>
            </Row>
          </ListItem>
        ))
      }
      <ListItem>
        <Box borderTopWidth="sm" borderTopColor="border" borderTopStyle="solid">
          <Row>
            <Col sm={9}>
              <Box mt={2}>
                <Text fontWeight="bold" fontSize="md">Total</Text>
              </Box>
            </Col>
            <Col sm={3}>
              <Flex alignItems="center" justifyContent="flex-end">
                <Box mt={2}>
                  <Text fontWeight="bold" fontSize="md">{totalPrice}</Text>
                </Box>
              </Flex>
            </Col>
          </Row>
        </Box>
      </ListItem>
    </List>
  </Box>
);

PriceSummary.propTypes = {
  summary: PropTypes.array.isRequired,
  totalPrice: PropTypes.string.isRequired,
};

export default PriceSummary;
