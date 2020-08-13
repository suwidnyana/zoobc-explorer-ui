import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'antd'
import DescItem from '../DescItem'
import { useTranslation } from 'react-i18next'

const ClaimNodeRegistration = ({ data }) => {
  const { t } = useTranslation()
  return (
    <Card className="transaction-card">
      <h4 className="transaction-card-title page-title">{t('claim node registration')}</h4>
      <DescItem
        label={t('account address')}
        style={{ display: 'none' }}
        value={<Link to={`/accounts/${data.AccountAddress}`}>{data.AccountAddress}</Link>}
      />
      <DescItem
        label={t('node public key')}
        text="A string of letters and numbers that are used to receive amount of ZooBC. Works similar to a traditional bank account number and can be shared publicly with others"
        value={<Link to={`/nodes/${data.NodePublicKey}`}>{data.NodePublicKey}</Link>}
      />
      <DescItem
        label={t('poow message bytes')}
        style={{ display: 'none' }}
        value={data.ProofOfOwnership && data.ProofOfOwnership.MessageBytes}
      />
      <DescItem
        label={t('poow signature')}
        style={{ display: 'none' }}
        value={data.ProofOfOwnership && data.ProofOfOwnership.Signature}
      />
    </Card>
  )
}

export default ClaimNodeRegistration
