import React from 'react';
import classNames from 'classnames/bind';
import styles from './Table.module.scss';

const cx = classNames.bind(styles);

const Table = () => {
  return (
    <div className={cx('table')}>
      <div className={cx('container', 'container-medium')}>
        <table className={cx('content-table')}>
          <tr className={cx('row')}>
            <th className={cx('first-title', 'title-table')}>Included in the package</th>
            <th className={cx('title-table')}>Complete management</th>
            <th className={cx('title-table')}>Partial control</th>
          </tr>
          <tr className={cx('row')}>
            <td>Real estate advertising</td>
            <td className={cx('check-mark')}>✓</td>
            <td className={cx('check-mark')}>✓</td>
          </tr>
          <tr className={cx('row')}>
            <td>Search for tenants</td>
            <td className={cx('check-mark')}>✓</td>
            <td className={cx('check-mark')}>✓</td>
          </tr>{' '}
          <tr className={cx('row')}>
            <td>Conclusion of a lease agreement</td>
            <td className={cx('check-mark')}>✓</td>
            <td className={cx('check-mark')}>✓</td>
          </tr>{' '}
          <tr className={cx('row')}>
            <td>Getting paid</td>
            <td className={cx('check-mark')}>✓</td>
            <td className={cx('check-mark')}>✓</td>
          </tr>{' '}
          <tr className={cx('row')}>
            <td>Key handover</td>
            <td className={cx('check-mark')}>✓</td>
            <td className={cx('check-mark')}>✓</td>
          </tr>{' '}
          <tr className={cx('row')}>
            <td>Payment processing</td>
            <td className={cx('check-mark')}>✓</td>
            <td className={cx('check-mark')}>✓</td>
          </tr>{' '}
          <tr className={cx('row')}>
            <td>Dealing with repair requests</td>
            <td className={cx('check-mark')}>✓</td>
            <td className={cx('check-mark')}>✓</td>
          </tr>{' '}
          <tr className={cx('row')}>
            <td>DEWA connection (electricity/water)</td>
            <td className={cx('check-mark')}>✓</td>
            <td className={cx('check-mark')}>✓</td>
          </tr>{' '}
          <tr className={cx('row')}>
            <td>Registration of the rental agreement Ejari</td>
            <td className={cx('check-mark')}>✓</td>
            <td className={cx('check-mark')}>✓</td>
          </tr>{' '}
          <tr className={cx('row')}>
            <td>Separate administrator</td>
            <td className={cx('check-mark')}>✓</td>
            <td className={cx('check-mark')}>✓</td>
          </tr>{' '}
          <tr className={cx('row')}>
            <td>Detailed inspection of the object</td>
            <td></td>
            <td className={cx('check-mark')}>✓</td>
          </tr>{' '}
          <tr className={cx('row')}>
            <td>Property preparation before arrival</td>
            <td></td>
            <td className={cx('check-mark')}>✓</td>
          </tr>{' '}
          <tr className={cx('row')}>
            <td>Reporting</td>
            <td></td>
            <td className={cx('check-mark')}>✓</td>
          </tr>{' '}
          <tr className={cx('row')}>
            <td>Repair Request Management</td>
            <td></td>
            <td className={cx('check-mark')}>✓</td>
          </tr>{' '}
          <tr className={cx('row')}>
            <td>Repair management</td>
            <td></td>
            <td className={cx('check-mark')}>✓</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Table;
