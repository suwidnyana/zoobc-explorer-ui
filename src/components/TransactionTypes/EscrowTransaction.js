import React from 'react'
import { Card } from 'antd'
import { useTranslation } from 'react-i18next'
import NumberFormat from 'react-number-format'

import DescItem from '../DescItem'
import { Link } from 'react-router-dom'

const EscrowTransaction = ({ data, blockID, TransactionID }) => {
  const { t } = useTranslation()
  return (
    <Card className="transaction-card">
      <h4 className="transaction-card-title page-title">{t('escrow transaction')}</h4>

      {!!TransactionID && (
        <DescItem
          label={t('transaction id')}
          text={t(
            'an identifier which facilitates easy identification of transactions on the zoobc blockchain'
          )}
          value={<Link to={`/transactions/${TransactionID}`}>{TransactionID}</Link>}
        />
      )}

      <DescItem
        label={t('sender')}
        style={{ display: 'none' }}
        value={<Link to={`/accounts/${data.SenderAddress}`}>{data.SenderAddress}</Link>}
        textClassName="monospace-text"
      />
      <DescItem
        label={t('recipient')}
        style={{ display: 'none' }}
        value={<Link to={`/accounts/${data.RecipientAddress}`}>{data.RecipientAddress}</Link>}
        textClassName="monospace-text"
      />
      <DescItem
        label={t('approver')}
        style={{ display: 'none' }}
        value={<Link to={`/accounts/${data.ApproverAddress}`}>{data.ApproverAddress}</Link>}
        textClassName="monospace-text"
      />
      <DescItem
        label={t('commission Fee')}
        style={{ display: 'none' }}
        value={
          <NumberFormat
            value={data.CommissionConversion || 0}
            displayType={'text'}
            thousandSeparator={true}
            suffix={' ZBC'}
            className="monospace-text"
          />
        }
      />
      <DescItem label={t('timeout')} style={{ display: 'none' }} value={data.Timeout} />
      <DescItem
        label={t('block height')}
        text={t(
          'the position of the block in the zoobc blockchain. for example, height 0, would be the very first block, which is also called the genesis block'
        )}
        value={<Link to={`/blocks/${blockID}`}>{data.BlockHeight}</Link>}
      />
      <DescItem label={t('instruction')} style={{ display: 'none' }} value={data.Instruction} />
    </Card>
  )
}

export default EscrowTransaction
