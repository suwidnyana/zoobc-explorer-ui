/**
 * ZooBC Copyright (C) 2020 Quasisoft Limited - Hong Kong
 * This file is part of ZooBC <https://github.com/zoobc/zoobc-explorer-ui>

 * ZooBC is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.

 * ZooBC is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.

 * You should have received a copy of the GNU General Public License
 * along with ZooBC.  If not, see <http://www.gnu.org/licenses/>.

 * Additional Permission Under GNU GPL Version 3 section 7.
 * As the special exception permitted under Section 7b, c and e,
 * in respect with the Author’s copyright, please refer to this section:

 * 1. You are free to convey this Program according to GNU GPL Version 3,
 *     as long as you respect and comply with the Author’s copyright by
 *     showing in its user interface an Appropriate Notice that the derivate
 *     program and its source code are “powered by ZooBC”.
 *     This is an acknowledgement for the copyright holder, ZooBC,
 *     as the implementation of appreciation of the exclusive right of the
 *     creator and to avoid any circumvention on the rights under trademark
 *     law for use of some trade names, trademarks, or service marks.

 * 2. Complying to the GNU GPL Version 3, you may distribute
 *     the program without any permission from the Author.
 *     However a prior notification to the authors will be appreciated.

 * ZooBC is architected by Roberto Capodieci & Barton Johnston
 * contact us at roberto.capodieci[at]blockchainzoo.com
 * and barton.johnston[at]blockchainzoo.com

 * IMPORTANT: The above copyright notice and this permission notice
 * shall be included in all copies or substantial portions of the Software.
**/

import { useEffect } from 'react'
import { useLazyQuery, gql } from '@apollo/client'

const GET_SEARCH_DATA = gql`
  query getSearchData($Id: String!) {
    search(Id: $Id) {
      ID
      Height
      Timestamp
      FoundIn
      Promotion {
        Keyword
        Content
      }
    }
  }
`

const useSearch = (keyword, history) => {
  const [doSearch, { loading, data, error, called }] = useLazyQuery(GET_SEARCH_DATA, {
    variables: {
      Id: keyword,
    },
    fetchPolicy: 'network-only',
  })

  useEffect(() => {
    if (!!data && !error && !loading) {
      const { ID, FoundIn, Promotion } = data.search

      switch (FoundIn) {
        case 'Block':
          history.push(`/blocks/${ID}`)
          break
        case 'Transaction':
          history.push(`/transactions/${ID}`)
          break
        case 'Account':
          history.push(`/accounts/${ID}`)
          break
        case 'Node':
          history.push(`/nodes/${ID}`)
          break
        default:
          history.push({
            pathname: '/search',
            search: `?search=${keyword}`,
            state: { search: keyword, promotion: Promotion },
          })
          break
      }
    } else if (!!error) {
      history.push({
        pathname: '/not-found',
        state: { keyword: keyword },
      })
    }
  }, [keyword, data, loading, error, history])

  return { loading, error, data, doSearch, called }
}

export default useSearch
