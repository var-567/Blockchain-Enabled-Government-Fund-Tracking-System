// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;
import "hardhat/console.sol";
contract transcation{
   address payable public admin;      // The account sending payments.
    address payable public benifiter;   // The account receiving the payments.npx 

     constructor (address payable recipientAddress)payable
    {
        admin = payable(msg.sender);
        benifiter = recipientAddress;
    }
    

     function transfer_within( string memory _Msg , bytes memory _Signature) public payable{
        console.log("deploying transfer function");
         require(verify(admin,_Msg,_Signature), "not valid sign");
          benifiter.transfer(msg.value);
        }
    

    function getuserbalance() public view returns (uint){
        return address(admin).balance;
    }

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }

    //**********************SIGNATURE VERIFICATION PART********************
    function hashmsg(string memory _message) public pure returns (bytes32) {
        return keccak256(abi.encodePacked( _message));
    }

    
    function signhashmsg(bytes32 _hashmsg)public pure returns (bytes32)
    {
        return keccak256(abi.encodePacked("\x19Ethereum Signed Message:\n32", _hashmsg));
    }

    function verify(address _signer, string memory _msg , bytes memory _signature)internal pure returns(bool){
        bytes32 msghash =hashmsg(_msg);
        bytes32 signedhashmsg= signhashmsg(msghash);

        return recoverSigner(signedhashmsg , _signature) == _signer;
    }

function recoverSigner(bytes32 _signedhashmsg,bytes memory _signature ) public pure returns (address) {
    (bytes32 r, bytes32 s, uint8 v) = splitSignature(_signature);

        return ecrecover(_signedhashmsg, v, r, s);
    }



 function splitSignature(
        bytes memory _sig
    ) public pure returns (bytes32 r, bytes32 s, uint8 v) {
        require(_sig.length == 65, "invalid signature length");

        assembly {
            /*
            First 32 bytes stores the length of the signature

            add(sig, 32) = pointer of sig + 32
            effectively, skips first 32 bytes of signature

            mload(p) loads next 32 bytes starting at the memory address p into memory
            */

            // first 32 bytes, after the length prefix
            r := mload(add(_sig, 32))
            // second 32 bytes
            s := mload(add(_sig, 64))
            // final byte (first byte of the next 32 bytes)
            v := byte(0, mload(add(_sig, 96)))
        }

        // implicitly return (r, s, v)
    }


}