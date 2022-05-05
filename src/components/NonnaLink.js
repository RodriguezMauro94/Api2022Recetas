import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NonnaLink = styled(Link)(() => ({
    color: "inherit",
    textDecoration: "inherit"
}));

export default (props) => <NonnaLink {...props} />;