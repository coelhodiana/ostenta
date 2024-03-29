import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TransactionsService } from 'src/app/shared/services/transactions/transactions.service';

import { Transaction } from '../../shared/interfaces/transaction';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  selectedMonth = new Date();

  transactionsList = new BehaviorSubject<Transaction[]>([]);

  transactionsListShow = new BehaviorSubject<Transaction[]>([]);

  balance = 0;

  income = 0;

  total = 0;

  expense = 0;

  investment = 0;

  constructor(
    private transactions: TransactionsService,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {
    this.getTransactionsList();
    // this.transactions.postMethod().subscribe({
    //   next: ()=>console.log
    // })
  }
  getTransactionsList() {
    this.transactions.listTransactions().subscribe({
      next: (transactions: Transaction[]) => {
        this.transactionsList.next(transactions.reverse());
        const list = this.filterTransactionsByMonth(transactions);
        this.transactionsListShow.next(list);
        this.calculateTotals();
      },
    });
  }

  filterTransactionByType(type: string) {
    return this.transactionsListShow.value.filter((transaction: any) => {
      return transaction.type === type;
    });
  }

  filterTransactionsByMonth(list: Transaction[]) {
    return list.filter((item) => {
      return (
        this.datePipe.transform(item.date, 'yyyy-MM') ===
        this.datePipe.transform(this.selectedMonth, 'yyyy-MM')
      );
    });
  }

  calculateTotalOfType(type: string) {
    let filteredTransactions = this.filterTransactionByType(type);

    let inicialValue = 0;

    return filteredTransactions.reduce(
      (prevValue: number, value: Transaction) => prevValue + value.amount,
      inicialValue
    );
  }

  calculateTotals() {
    this.income = this.calculateTotalOfType('entrada');
    this.expense =
      this.calculateTotalOfType('saída');
    this.investment = this.calculateTotalOfType('investido');
    this.getBalance();
  };

  getBalance() {
    this.balance = this.income - (this.expense + this.investment);
  };

  selectCurrentMonth() {
    this.selectedMonth = new Date();
    const list: Transaction[] = this.filterTransactionsByMonth(
      this.transactionsList.value
    );

    this.transactionsListShow.next(list);

    this.calculateTotals();
  };

  selectMonth(month: string) {
    if(month === 'next') {
      this.selectedMonth = new Date(
        this.selectedMonth.setMonth(this.selectedMonth.getMonth() + 1)
      );
    } else if(month === 'prev') {
      this.selectedMonth = new Date(
        this.selectedMonth.setMonth(this.selectedMonth.getMonth() - 1)
      );
    };

    const list: Transaction[] = this.filterTransactionsByMonth(
      this.transactionsList.value
    );

    this.transactionsListShow.next(list);

    this.calculateTotals();
  };
};
