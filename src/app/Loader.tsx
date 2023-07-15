import { FC, Suspense } from "react"
import Loading from './Loading'

export const Loader = (Component: FC) => (props: any) =>
    <Suspense fallback={<Loading cover="page" />}>
        <Component {...props} />
    </Suspense>