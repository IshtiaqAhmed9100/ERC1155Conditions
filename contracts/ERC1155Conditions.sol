// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFT1155Conditions is ERC1155, Ownable {
    constructor(
        string memory _name,
        string memory _symbol
    ) Ownable(msg.sender) ERC1155("") {}

    function mint(address account, uint256 tokenId, uint256 values) external {
        if (tokenId > 5) {
            revert(getErrorMessage());
        }
        _mint(account, tokenId, values, "");
    }

    function batchMint(
        address account,
        uint256[] memory tokenIds,
        uint256[] memory values
    ) external {
        uint256[] memory result = new uint256[](tokenIds.length);
        for (uint256 i = 0; i < tokenIds.length; i++) {
            result[i] = tokenIds[i];
            if (result[i] > 5) {
                revert(getErrorMessage());
            }
        }
        _mintBatch(account, tokenIds, values, "");
    }

    function getErrorMessage() private pure returns (string memory) {
        return "User can mint upto 5 ids only";
    }
}
