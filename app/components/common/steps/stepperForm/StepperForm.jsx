import React, { useState } from 'react';
import { CircleArrowRight, CircleArrowLeft, Check } from 'lucide-react';

export default function StepperForm({
    steps,
    onSubmit,
    finalReview,
    showFinalStep = true,
}) {
    const [step, setStep] = useState(0);
    const isLastStep = step === steps.length;

    const goNext = () => {
        if (step < steps.length) setStep((prev) => prev + 1);
    };

    const goBack = () => {
        if (step > 0) setStep((prev) => prev - 1);
    };

    return (
        <div className="space-y-6">
            {/* Indicador de etapas */}
            <div className="flex justify-start mb-6 mt-10 space-x-3">
                {steps.map((_, index) => (
                    <span
                        key={index}
                        className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold border-2 shadow-lg ${step === index
                                ? "bg-[#0A4A81] text-white border-white shadow-md"
                                : "text-gray-400 border-gray-300"
                            }`}
                    >
                        {index + 1}
                    </span>
                ))}
                {showFinalStep && (
                    <span
                        className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold border-2 shadow-md ${isLastStep
                                ? "bg-[#0A4A81] text-white border-white"
                                : "text-gray-400 border-gray-300"
                            }`}
                    >
                        <Check size={16} className="text-white" />
                    </span>
                )}
            </div>

            {/* Conteúdo dinâmico */}
            {step < steps.length ? (
                <div>{steps[step].content}</div>
            ) : (
                showFinalStep && (
                    <div className="space-y-4">
                        {finalReview}
                        <button
                            onClick={onSubmit}
                            className="w-full bg-[#0A4A81] text-white p-3 rounded-xl hover:bg-[#0A4A81] transition"
                        >
                            Finalizar
                        </button>
                    </div>
                )
            )}

            <div className="flex justify-between gap-4 mt-4">
                <button
                    onClick={goBack}
                    disabled={step === 0}
                    className="bg-gray-100 text-gray-500 flex items-center p-3 rounded-full hover:bg-white transition disabled:opacity-30 shadow-lg hover:shadow-xl"
                >
                    <CircleArrowLeft size={20} className="inline-block mr-2 text-gray-500" />
                    Voltar
                </button>
                {!isLastStep && (
                    <button
                        onClick={goNext}
                        className="bg-[#0A4A81] text-white gap-1 flex items-center p-3 rounded-full hover:bg-[#ffffff] transition shadow-lg hover:text-[#0A4A81] hover:shadow-xl"
                    >
                        Próximo	
                        <CircleArrowRight size={20} className="inline-block mr-2" />
                    </button>
                )}
            </div>
        </div>
    );
}
