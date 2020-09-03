package org.architecture.architecture.Service.Concrete;

import org.architecture.architecture.DAO.AccountDao;
import org.architecture.architecture.DAO.TransactionDao;
import org.architecture.architecture.DTO.AccountDto;
import org.architecture.architecture.DTO.TransactionDto;
import org.architecture.architecture.Entity.Account;
import org.architecture.architecture.Entity.Transaction;
import org.architecture.architecture.Entity.TransferInfo;
import org.architecture.architecture.Service.Interface.TransferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class TransferServiceImpl implements TransferService {
    @Autowired
    TransactionDao transactionDao;
    @Autowired
    AccountDao accountDao;

    @Override
    public List<TransactionDto> transfer(TransferInfo transferInfo) {
        AccountDto accountDto = accountDao.select(new AccountDto(transferInfo.getAccountId()));
        AccountDto inquiryAccountDto = accountDao.select(new AccountDto(transferInfo.getInquiryAccountId()));

        accountDto.setBalance(accountDto.getBalance() - transferInfo.getAmount());
        inquiryAccountDto.setBalance(inquiryAccountDto.getBalance() + transferInfo.getAmount());

        accountDao.update(accountDto);
        accountDao.update(inquiryAccountDto);

        Timestamp time = Timestamp.valueOf(LocalDateTime.now());
        TransactionDto transactionDto = new TransactionDto(0,time,transferInfo.getDescription(),1,transferInfo.getAmount(),"Internet",accountDto.getAccountId());
        TransactionDto inquiryTransactionDto =
                new TransactionDto(0,time,transferInfo.getDescription(),0,transferInfo.getAmount(),"Internet",inquiryAccountDto.getAccountId());
        transactionDao.insert(transactionDto);
        transactionDao.insert(inquiryTransactionDto);
        List<TransactionDto> transactionDtoList =  new ArrayList<TransactionDto>();
        transactionDtoList.add(transactionDto);
        transactionDtoList.add(inquiryTransactionDto);
        return transactionDtoList;
    }
}
