import styles from '../../../styles/Home.module.css'
import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'
import { useRouter } from 'next/router'

export default function CartDateSlug() {
  const router = useRouter()
  const { date } = router.query
  return (
    <>
      <h1 className={(styles.title, styles.time)}>CartDate Slug</h1>
    </>
  )
}

CartDateSlug.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
