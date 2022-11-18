function getContractInstance (abi, address) {
    let contract = new web3.eth.Contract(abi, address);
    return contract;
}

async function getName (instance) {
    return await instance.methods.name().call();
}

async function mintToken(instance, address, from) {
    return await instance.methods.mint(address).send({from: from});
}

// Blue function
/**
 * Get balanceOf address
 * @param instance
 * @param address
 */
async function balanceOf(instance, address) {
    return await instance.methods.balanceOf(address).call();
}

/**
 * Get currentCounter
 * @param instance
 */
async function currentCounter(instance) {
    return await instance.methods.currentCounter().call();
}

/**
 * Get currentCounter
 * @param instance
 * @param tokenId unit256
 */
async function getApproved(instance, tokenId) {

    return await instance.methods.getApproved(role).call();
}

/**
 * Get getRoleAdmin
 * @param instance
 * @param role bytes32
 */
async function getRoleAdmin(instance, role) {
    return await instance.methods.getRoleAdmin(role).call();
}

/**
 * Get getRoleMember
 * @param instance
 * @param role bytes32
 * @param index uint256
 */
async function getRoleMember(instance, role, index) {
    return await instance.methods.getRoleMember(role, index).call();
}

/**
 * Get getRoleMemberCount
 * @param instance
 * @param role bytes32
 */
async function getRoleMemberCount(instance, role) {
    return await instance.methods.getRoleMemberCount(role).call();
}

/**
 * Get hasRole
 * @param instance
 * @param role bytes32
 * @param account address
 */
async function hasRole(instance, role, account) {
    return await instance.methods.hasRole(role, account).call();
}

/**
 * Get isApprovedForAll
 * @param instance
 * @param owner address
 * @param operator address
 */
async function isApprovedForAll(instance, owner, operator) {
    return await instance.methods.isApprovedForAll(owner, operator).call();
}

/**
 * Get symbol
 * @param instance
 */
async function symbol(instance) {
    return await instance.methods.symbol().call();
}

/**
 * Get ownerOf
 * @param instance
 * @param tokenId uint256
 */
async function ownerOf(instance, tokenId) {
    return await instance.methods.ownerOf(tokenId).call();
}

/**
 * Get paused
 * @param instance
 */
async function paused(instance) {
    return await instance.methods.paused().call();
}

/**
 * Get name
 * @param instance
 */
async function name(instance) {
    return await instance.methods.name().call();
}

/**
 * Get supportsInterface
 * @param instance
 * @param interfaceId bytes4
 * @param account address
 */
async function supportsInterface(instance, interfaceId) {
    return await instance.methods.supportsInterface(interfaceId).call();
}

/**
 * Get tokenByIndex
 * @param instance
 * @param index uint256
 */
async function tokenByIndex(instance, index) {
    return await instance.methods.tokenByIndex(index).call();
}

/**
 * Get getRoleMember
 * @param instance
 * @param owner address
 * @param index uint256
 */
async function tokenOfOwnerByIndex(instance, owner, index) {
    return await instance.methods.tokenOfOwnerByIndex(owner, index).call();
}

/**
 * Get tokenURI
 * @param instance
 * @param tokenId uint256
 */
async function tokenURI(instance, tokenId) {
    return await instance.methods.tokenURI(tokenId).call();
}

/**
 * Get getRoleMember
 * @param instance
 */
async function totalSupply(instance) {
    return await instance.methods.totalSupply().call();
}

/**
 * Get viewItem
 * @param instance
 * @param tokenId uint256
 */
async function viewItem(instance, tokenId) {
    return await instance.methods.viewItem(tokenId).call();
}

/**
 * approve token for consumer
 * @param _to
 * @param _tokenId
 * @param _from
 * @returns {Promise<*>}
 */
async function approve(_to, _tokenId, _from) {
    return await instance.methods.approve(_to, _tokenId).send({from: _from});
}

/**
 * Burn token id
 * @param _tokenId
 * @param _from
 * @returns {Promise<*>}
 */
async function burn(_tokenId, _from) {
    return await instance.methods.burn(_tokenId).send({from: _from});
}

/**
 *
 * @param _tokenId1
 * @param _tokenId2
 * @param _from
 * @returns {Promise<*>}
 */
async function mixYopy(_tokenId1, _tokenId2, _from) {
    return await instance.methods.mixYopy(_tokenId1, _tokenId2).send({from: _from});
}

/**
 *
 * @param _from
 * @returns {Promise<*>}
 */
async function genYopy( _from) {
    return await instance.methods.genYopy().send({from: _from});
}

/**
 *
 * @param _from
 * @param _to
 * @param _tokenId
 * @param _sender
 * @returns {Promise<*>}
 */
async function safeTransferFrom(_from, _to, _tokenId, _sender) {
    return await instance.methods.safeTransferFrom(_from, _to, _tokenId).send({from: _sender});
}

/**
 *
 * @param _from
 * @param _to
 * @param _tokenId
 * @param _data
 * @param _sender
 * @returns {Promise<*>}
 */
async function safeTransferFromWithData( _from, _to, _tokenId, _data, _sender) {
    return await instance.methods.safeTransferFrom(_from, _to, _tokenId, _data).send({from: _sender});
}


/**
 *
 * @param _operator
 * @param _approved
 * @param _sender
 * @returns {Promise<*>}
 */
async function setApprovalForAll( _operator, _approved, _sender) {
    return await instance.methods.setApprovalForAll(_operator, _approved).send({from: _sender});
}


/**
 *
 * @param _from
 * @param _to
 * @param _tokenId
 * @param _sender
 * @returns {Promise<*>}
 */
async function transferFrom( _from, _to, _tokenId, _sender) {
    return await instance.methods.transferFrom(_from, _to, _tokenId).send({from: _sender});
}


