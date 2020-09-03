package org.architecture.architecture.Service.Concrete;

import org.architecture.architecture.DAO.TransactionDao;
import org.architecture.architecture.DTO.AccountDto;
import org.architecture.architecture.DTO.TransactionDto;
import org.architecture.architecture.Entity.Transaction;
import org.architecture.architecture.Service.Interface.InquiryDateService;
import org.architecture.architecture.Service.Interface.InquiryDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class InquiryDateServiceImpl implements InquiryDateService {
    @Autowired
    TransactionDao transactionDao;

    @Override
    public List<TransactionDto> inquiry(int accountId, Date time, int type) {
        List<TransactionDto> transactionDtoList = transactionDao.selectAccount(new AccountDto(accountId));
        List<TransactionDto> result  = new ArrayList<TransactionDto>();

        for(TransactionDto transactionDto : transactionDtoList){
            if(transactionDto.getDate().compareTo(time) == 1){
                result.add(transactionDto);
            }
        }
        return result;
    }
}
