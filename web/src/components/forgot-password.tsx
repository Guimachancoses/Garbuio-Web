import { Logo } from '@/src/components/logo'
import { Button } from '@/src/components/ui/button'
import { Input } from '@/src/components/ui/input'
import { Label } from '@/src/components/ui/label'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

type LoginProps = {
    onForgot: () => void
}

export default function ForgotPasswordPage({ onForgot }: LoginProps) {

    const t = useTranslations('forgot-card')

    return (
        <section >
            <form
                action=""
                className="bg-muted m-auto h-fit w-full max-w-sm overflow-hidden rounded-[calc(var(--radius)+.125rem)] border shadow-md shadow-zinc-950/5 dark:[--color-muted:var(--color-zinc-900)]">
                <div className="bg-card -m-px rounded-[calc(var(--radius)+.125rem)] border p-8 pb-6">
                    <div>
                        <Link
                            href="/"
                            aria-label="go home">
                            <Logo />
                        </Link>
                        <h1 className="mb-1 mt-4 text-xl font-semibold">{t('title')}</h1>
                        <p className="text-sm">{t('description')}</p>
                    </div>

                    <div className="mt-6 space-y-6">
                        <div className="space-y-2">
                            <Label
                                htmlFor="email"
                                className="block text-sm">
                                {t('mail')}
                            </Label>
                            <Input
                                type="email"
                                required
                                name="email"
                                id="email"
                                placeholder="name@example.com"
                            />
                        </div>

                        <Button className="w-full">{t('button')}</Button>
                    </div>

                    <div className="mt-6 text-center">
                        <p className="text-muted-foreground text-sm">{t('info')}</p>
                    </div>
                </div>

                <div className="p-3">
                    <p className="text-accent-foreground text-center text-sm">
                        {t('ask')}
                        <Button
                            asChild
                            variant="link"
                            className="px-2"
                            onClick={onForgot}
                        >
                            <Link href="">{t('button-1')}</Link>
                        </Button>
                    </p>
                </div>
            </form>
        </section>
    )
}
