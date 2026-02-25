import { Button } from "@/src/components/ui/button";
import {
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/src/components/ui/dialog";
import { TypingAnimation } from "@/src/components/ui/typing-animation";
import { TextAnimate } from "@/src/components/ui/text-animate"
import { FaWhatsapp } from "react-icons/fa";
import { LogoIcon } from "./logo";
import { useTranslations } from "next-intl";

export function WhatsAppDialog() {

    const t = useTranslations('dialog-whats')

    const areas = [
        t('button'),
        t('button-1'),
        t('button-2'),
        t('button-3'),
        t('button-4'),
    ];

    return (
        <DialogContent className="sm:max-w-[450px]">
            <DialogHeader className="space-y-1">
                <DialogTitle className="flex flex-row items-center gap-2 text-center">
                    <LogoIcon />
                    <TypingAnimation>
                        {t('title')}
                    </TypingAnimation>
                </DialogTitle>
            </DialogHeader>

            {/* MENOR ESPAÇAMENTO */}
            <div className="grid gap-2 mt-0">
                {areas.map((area) => (
                    <Button
                        key={area}
                        variant="outline"
                        className="flex items-center gap-2 justify-start"
                    >
                        <FaWhatsapp size={20} className="text-green-500" />
                        <TextAnimate
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    y: 30,
                                    rotate: 45,
                                    scale: 0.5,
                                },
                                show: (i) => ({
                                    opacity: 1,
                                    y: 0,
                                    rotate: 0,
                                    scale: 1,
                                    transition: {
                                        delay: i * 0.1,
                                        duration: 0.4,
                                        y: {
                                            type: "spring",
                                            damping: 12,
                                            stiffness: 200,
                                            mass: 0.8,
                                        },
                                        rotate: {
                                            type: "spring",
                                            damping: 8,
                                            stiffness: 150,
                                        },
                                        scale: {
                                            type: "spring",
                                            damping: 10,
                                            stiffness: 300,
                                        },
                                    },
                                }),
                                exit: (i) => ({
                                    opacity: 0,
                                    y: 30,
                                    rotate: 45,
                                    scale: 0.5,
                                    transition: {
                                        delay: i * 0.1,
                                        duration: 0.4,
                                    },
                                }),
                            }}
                            by="character"
                        >
                            {area}
                        </TextAnimate>
                    </Button>
                ))}
            </div>

            <DialogFooter className="mt-3">
                <DialogClose asChild>
                    <Button variant="ghost">{t('close')}</Button>
                </DialogClose>
            </DialogFooter>
        </DialogContent>
    );
}
