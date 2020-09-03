package org.architecture.architecture.Controller;

import org.architecture.architecture.DTO.AccountDto;
import org.architecture.architecture.DTO.TransactionDto;
import org.architecture.architecture.Entity.TransferInfo;
import org.architecture.architecture.Service.Interface.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;
import org.springframework.web.bind.annotation.*;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Future;

@RestController
public class MainController {

    Logger log = LoggerFactory.getLogger(MainController.class);

    @Autowired
    InquiryService inquiryService;
    @Autowired
    InquiryDetailService inquiryDetailService;
    @Autowired
    InquiryDateService inquiryDateService;
    @Autowired
    InquiryTypeService inquiryTypeService;
    @Autowired
    TransferService transferService;
    @Autowired
    ThreadPoolTaskExecutor threadPoolTaskExecutor;

    @RequestMapping(value = "/accountInquiry", method = RequestMethod.GET)
    public List<AccountDto> accountInquiry(@RequestParam String userName){
        log.info("User name : " + userName);
        Callable<List<AccountDto>> callable = () -> {
            List<AccountDto> accountDtoList = inquiryService.inquiry(userName);
            return accountDtoList;
        };
        Future<List<AccountDto>> result = threadPoolTaskExecutor.submit(callable);
        try {
            return result.get();
        } catch (InterruptedException e) {
            e.printStackTrace();
            return null;
        } catch (ExecutionException e) {
            e.printStackTrace();
            return null;
        }
    }

    @RequestMapping(value = "/accountDetail",method = RequestMethod.GET)
    public List<TransactionDto> accounttDetail(@RequestParam int accountId){
        Callable<List<TransactionDto>> callable =  () -> {
            List<TransactionDto> transactionDtoList = inquiryDetailService.inquiry(accountId,null,0);
            return transactionDtoList;
        };
        Future<List<TransactionDto>> result = threadPoolTaskExecutor.submit(callable);
        try {
            return result.get();
        } catch (InterruptedException e) {
            e.printStackTrace();
            return null;
        } catch (ExecutionException e) {
            e.printStackTrace();
            return null;
        }
    }
    @RequestMapping(value = "/accountDetail/time", method = RequestMethod.GET)
    public List<TransactionDto> accountDetailTime(@RequestParam String time, @RequestParam int accountId){
        log.info("Account Detail Time : " + time);
        Callable<List<TransactionDto>> callable =  () -> {
            SimpleDateFormat transFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            Date date = transFormat.parse(time);
            List<TransactionDto> transactionDtoList = inquiryDateService.inquiry(accountId,date,0);
            return transactionDtoList;
        };
        Future<List<TransactionDto>> result = threadPoolTaskExecutor.submit(callable);
        try {
            return result.get();
        } catch (InterruptedException e) {
            e.printStackTrace();
            return null;
        } catch (ExecutionException e) {
            e.printStackTrace();
            return null;
        }
    }

    @RequestMapping(value = "/accountDetail/type", method = RequestMethod.GET)
    public List<TransactionDto> accountDetailType(@RequestParam int type,@RequestParam int accountId){
        Callable<List<TransactionDto>> callable =  () -> {
            List<TransactionDto> transactionDtoList = inquiryTypeService.inquiry(accountId,null,type);
            return transactionDtoList;
        };
        Future<List<TransactionDto>> result = threadPoolTaskExecutor.submit(callable);
        try {
            return result.get();
        } catch (InterruptedException e) {
            e.printStackTrace();
            return null;
        } catch (ExecutionException e) {
            e.printStackTrace();
            return null;
        }
    }

    @RequestMapping(value = "/transfer", method = RequestMethod.POST)
    public List<TransactionDto> transfer(@RequestBody TransferInfo transferInfo){
        Callable<List<TransactionDto>> callable =  () -> {
            List<TransactionDto> transactionDtoList = transferService.transfer(transferInfo);
            return transactionDtoList;
        };
        Future<List<TransactionDto>> result = threadPoolTaskExecutor.submit(callable);
        try {
            return result.get();
        } catch (InterruptedException e) {
            e.printStackTrace();
            return null;
        } catch (ExecutionException e) {
            e.printStackTrace();
            return null;
        }
    }
}
