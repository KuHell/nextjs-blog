import styles from '../../../styles/Home.module.css'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import SubLayout from '../../components/SubLayout'

export default function CategorySlug() {
  const router = useRouter()
  const { slug, from } = router.query

  return (
    <>
      <h1 className={(styles.title, styles.time)}>
        Category {slug} {from}
      </h1>
    </>
  )
}

CategorySlug.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
