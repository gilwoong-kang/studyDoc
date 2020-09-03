package org.architecture.architecture.Service.Concrete;

import org.architecture.architecture.DAO.AccountDao;
import org.architecture.architecture.DAO.TransactionDao;
import org.architecture.architecture.DTO.AccountDto;
import org.architecture.architecture.DTO.TransactionDto;
import org.architecture.architecture.Service.Interface.InquiryDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
@Primary
public class InquiryDetailServiceImpl implements InquiryDetailService {

    @Autowired
    TransactionDao transactionDao;

    @Override
    public List<TransactionDto> inquiry(int accountId, Date time, int type) {
        List<TransactionDto> transactionDtoList = transactionDao.selectAccount(new AccountDto(accountId,0,null,0,0));
        return transactionDtoList;
    }
}
